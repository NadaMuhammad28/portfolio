import LazyImg from "../LazyImg";
import { TfiWorld } from "react-icons/tfi";
import { FiArrowUpRight } from "react-icons/fi";
import { AiOutlineGithub } from "react-icons/ai";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
export default function ProjectCard({ data }) {
  return (
    <article className="p-card-wrapper">
      <div className="p-img-container">
        <LazyImg alt={data.title} img="/redux.svg" />
      </div>
      <div className="p-content">
        <h2>{data.title}</h2>
        <div className="p-links-cntainer">
          {data.demo_url && (
            <span className="link-holder">
              <TfiWorld />
              <a href={data.demo_url} target="_blank">
                Live Demo
              </a>
            </span>
          )}
          <span className="link-holder">
            <AiOutlineGithub />
            <a href={data.repo_url} target="_blank">
              GitHub Repo
            </a>
          </span>
        </div>
        <Link to={`/projects/${data.slug}`}>learn more</Link>
      </div>
    </article>
  );
}
