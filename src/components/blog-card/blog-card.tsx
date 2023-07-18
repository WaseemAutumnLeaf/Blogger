"use client"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';

type Props = {}

const BlogCard = (post:any) => {

    const [postData, setPostData] = useState({})

    useEffect(() => {
        console.log(post.post.title)
        setPostData({
        author: post.post.author,
        title: post.post.title,
        date: post.post.date
    });

    }, [])

  return (
    <Card sx={{ minWidth: 800, height: 400 }}>
    <CardMedia
      sx={{ height: 280 }}
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/800px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg"
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {postData.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {postData.author} - {postData.date}
      </Typography>
    </CardContent>
  </Card>
  )
}

export default BlogCard;