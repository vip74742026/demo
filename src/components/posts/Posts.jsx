import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fbike-images%2Fcolors%2Froyal-enfield%2Fhunter-350%2Froyal-enfield-hunter-350-factory-silver.jpg%3Fv%3D1659935737&w=750&q=75" />
      <Post img="https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fbike-images%2Fcolors%2Fbajaj%2Favenger-cruise-220%2Fbajaj-avenger-cruise-220-auburn-black.png%3Fv%3D1585900542&w=750&q=75" />
      <Post img="https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fbike-images%2Fcolors%2Findian%2Fscout%2Findian-scout-metallic-jade.jpg%3Fv%3D1535538126&w=750&q=75"/>
      <Post img="https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fbike-images%2Fcolors%2Fsuzuki%2Fburgman%2Fsuzuki-burgman-pearl-mirage-white-bluetooth.png%3Fv%3D1627301371&w=750&q=75"/>
      <Post img="https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fbike-images%2Fcolors%2Fhonda%2Factiva-6g%2Fhonda-activa-6g-rebel-red-metallic.jpg%3Fv%3D1641197652&w=750&q=75"/>
    </div>
  );
}
