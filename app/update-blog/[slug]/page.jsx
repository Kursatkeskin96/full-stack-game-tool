"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import plus from "@/images/plus.png";
import image from "@/images/image.png";
import "react-quill/dist/quill.snow.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import {app} from '@/lib/firebase'
import ReactQuill, { Quill } from 'react-quill';
import { ImageActions } from "@xeger/quill-image-actions";
import { ImageFormats } from "@xeger/quill-image-formats";

Quill.register("modules/imageActions", ImageActions);
Quill.register("modules/imageFormats", ImageFormats);

export default function UpdaateBlog({params}) {
  const { status, session } = useSession()
  const router = useRouter()
  const { slug } = params;

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("")
  const [file, setFile] = useState(null)
  const [media, setMedia] = useState("")
  const [title, setTitle] = useState('')
  const [catSlug, setCatSlug] = useState("general"); 

  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);



      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  useEffect(() => {
    if (slug) {
      // Fetch the post data when the slug is available
      const fetchPostData = async () => {
        try {
          const response = await fetch(`http://localhost:3000/api/posts/${slug}`);
          if (!response.ok) {
            throw new Error('Failed to fetch post data');
          }
          const postData = await response.json();
          // Populate the form fields with the fetched data
          setTitle(postData.post.title);
          setValue(postData.post.desc);
          setMedia(postData.post.img);
          setCatSlug(postData.post.catSlug);
          // ... set other fields as needed
        } catch (error) {
          console.error('Error fetching post data:', error);
          // Handle error appropriately
        }
      };

      fetchPostData();
    }
  }, [slug]); // Run the effect when the slug changes

  if(status === "unauthenticated"){
    router.push("/");
  } 

  const slugify = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
    const handleSubmit = async () => {
      // Send a PUT request instead of a POST request
      const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
        method: "PUT",
        body: JSON.stringify({
          title,
          desc: value,
          img: media,
          // Don't need to update slug here as it's used as identifier
          catSlug,
        }),
      });
    if (res.status === 200) {
      const data = await res.json();
      router.push(`/guides/posts/${data.slug}`);
    }
  }
  
  const formats = ["align",
  "background",
  "blockquote",
  "bold",
  "code-block",
  "color",
  "float",
  "font",
  "header",
  "height",
  "image",
  "italic",
  "link",
  "script",
  "strike",
  "size",
  "underline",
  "width"];
  const modules = {
    imageActions: {},
  imageFormats: {},
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote'],
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'align': [] }],

      ['clean'],                                         // remove formatting button

      ['link', 'image', 'video']                         // link and image, video
    ]
  };
  return (
    <div className="pt-20 w-[80%] mx-auto flex justify-center flex-col">
      <input type="text" placeholder="Title" className="p-6 w-[70%] mx-auto text-4xl bg-transparent bg-gray-100" value={title} onChange={e=>setTitle(e.target.value)} />
      <select className="w-32 mb-10" onChange={(e) => setCatSlug(e.target.value)}>
        <option value="general">general</option>
        <option value="pvp-pve">pvp-pve</option>
        <option value="gather">gather</option>
        <option value="craft">craft</option>
        <option value="refine">refine</option>
        <option value="economy">economy</option>
      </select>
      <div className="flex gap-5 min-h-96 relative">
        <button className="w-8 h-8 rounded-[50%] bg-transparent border-[1px] border-black flex justify-center items-center cursor-pointer" onClick={() => setOpen(!open)}>
          <Image src={plus} alt="plus" width={16} height={16} />
        </button>
        {open && (
          <div className="mt-12 flex flex-col gap-5 absolute z-[999] w-full">
            <input type="file" id="image" onChange={e=>setFile(e.target.files[0])} style={{ display: "none"}}></input>
            <button className="w-8 h-8 rounded-[50%] bg-transparent border-[1px] border-black flex justify-center items-center cursor-pointer">
            <label htmlFor="image">
              <Image className="cursor-pointer" src={image} alt="plus" width={16} height={16} />
            </label>
            </button>
          </div>
        )}
<div className="h-fit w-[100%] mx-auto">
<ReactQuill 
  className="w-[100%] mx-auto bg-gray-50 " 
  theme="snow" 
  value={value} 
  onChange={setValue} 
  modules={modules}
  placeholder="Tell Your Story" 
  formats={formats} />
</div>
      </div>
      <button onClick={handleSubmit} className="mx-auto w-60 px-1 py-3 bg-green-400 text-white cursor-pointer rounded-md mt-20">Submit</button>
      </div>
  );
}
