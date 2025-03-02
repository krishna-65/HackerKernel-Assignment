import React from "react";
const AboutCard = ({image,text,date}) =>{
  return(
  <div className="min-w-[100%]  md:min-w-[450px] ">
        <img src={image} alt="" />
        <p className="my-3 text-xs pt-12 nd:pt-0  md:text-sm text-gray-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, repellat facilis, illo assumenda fugit distinctio nobis vel sunt molestiae tempora commodi sequi unde temporibus laboriosam minus nemo quas consectetur ratione optio dignissimos ex, voluptates porro illum velit? Quaerat consequatur ipsam nostrum doloremque iusto quibusdam nesciunt exercitationem a earum, soluta dicta?</p>
        <p className="my-3 text-sm text-gray-300">20 Jun 2020</p>
  </div>
  )
}

export default AboutCard;