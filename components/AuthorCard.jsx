import Link from "next/link";
import StoryCard from "./StoryCard";

export default function AuthorCard({ author, t, lang, more, bio }) {
  return (
    <div className="author-card">
      <img src={author.photo} alt="" width="88" height="88" />
      <div>
        <span className="label">{t.ui2.authorAbout}</span>
        <h3>{author.name}</h3>
        <span className="role">{author.role}</span>
        {bio && <p>{bio}</p>}
      </div>
    </div>
  );
}
