import React from 'react'
import { Carousel } from './ui/Carousel'

const Hero = () => {

  const slideData = [
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Urban Dreams",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Neon Nights",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Desert Whispers",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="bg-black h-screen flex justify-center text-white">
      <div className="w-1/2 left-100">
        <h1 className="text-5xl font-bold">
            Description
        </h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iusto, error esse velit voluptas consequatur facere veniam, repellat delectus rerum dolores exercitationem obcaecati molestias a, repellendus suscipit est corrupti? Repudiandae, quaerat quam? Sint facere tempora expedita debitis doloremque maxime vero ipsam sunt adipisci commodi in quod, fugiat blanditiis sapiente qui iusto. Optio impedit tenetur perspiciatis ad provident. A recusandae vitae dicta quas eligendi tenetur!
        </p>
      </div>
      <div>
        <h1>
            Carousel
        </h1>
        
            <div className="relative overflow-hidden w-full h-full py-20">
            <Carousel slides={slideData} />
            </div>
      </div>
    </div>
  )
}

export default Hero
