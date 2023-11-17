import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">𝕭𝖎k𝖊 𝖆𝖓𝖉 𝕽𝖎𝖉𝖊 </span>
       
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/9924837/pexels-photo-9924837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />  
    </div>
  );
}
