import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            Lorem ipsum dolor sit amet
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
      The Royal Enfield Hunter 350 is a roadster style motorcycle and marks the new entry point in Royal Enfield's line up. The Hunter 350 arrives in 2 variants, Retro & Metro. The Retro arrives as a 'Factory Series', while the Metro arrives in two guises, the 'Dapper Series' and the 'Rebel Series'.

In terms of its appearance, the Hunter 350 has a neo-retro design, and it introduces a new flavour to the Royal Enfield line up while retaining the brand's DNA. The design varies between the two variants of the Hunter 350, and to add to that, both the variants get a list of different colours and liveries, taking the total number of combinations up to 23.
      </p>
    </div>
  );
}
