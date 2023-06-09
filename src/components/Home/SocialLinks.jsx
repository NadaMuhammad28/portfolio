import { socialLinks } from "../../utils/constants";
import Tooltip from "@mui/material/Tooltip";
import { Fade } from "@mui/material";
export default function SocialLinks() {
  return (
    <div className="links-container d-flex">
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <div key={link.id}>
            <Tooltip
              title={link.name}
              placement="top"
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
            >
              <a className="link" href={link.url} target="_blank">
                <Icon />
              </a>
            </Tooltip>
          </div>
        );
      })}
    </div>
  );
}
