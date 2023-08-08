import { atom } from "recoil";

export const blogs = atom({
    key: 'blogs',
    default: [{
        "title": "My First Blog Post",
        "content": "This is the content of my first blog post.",
        "author": "John Doe",
        "date": "July 6, 2023"
      }, {
        "title": "My First Blog Post",
        "content": "This is the content of my first blog post.",
        "author": "John Doe",
        "date": "July 6, 2023"
      }, {
        "title": "My First Blog Post",
        "content": "This is the content of my first blog post.",
        "author": "John Doe",
        "date": "July 6, 2023"
      }]
})

export const authenticated = atom({
    key: "authenticated",
    default: false
})

export const user = atom({
  key: "user",
  default: ""
})

export const userId = atom({
  key: "userId",
  default: 0
})