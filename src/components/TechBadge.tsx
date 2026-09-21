import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa";
import {
  SiDjango,
  SiDocker,
  SiFastapi,
  SiKubernetes,
  SiPostgresql,
  SiPython,
  SiTerraform,
} from "react-icons/si";

// Brand colours, lightened where the official one disappears on a dark background.
const icons: Record<string, { Icon: IconType; color: string }> = {
  Python: { Icon: SiPython, color: "#4b8bbe" },
  FastAPI: { Icon: SiFastapi, color: "#05998b" },
  Django: { Icon: SiDjango, color: "#44b78b" },
  Docker: { Icon: SiDocker, color: "#2496ed" },
  Kubernetes: { Icon: SiKubernetes, color: "#326ce5" },
  Terraform: { Icon: SiTerraform, color: "#844fba" },
  AWS: { Icon: FaAws, color: "#ff9900" },
  PostgreSQL: { Icon: SiPostgresql, color: "#4f8fc4" },
};

export default function TechBadge({ name }: { name: string }) {
  const match = icons[name];
  return (
    <li className="tech-badge" style={match ? { ["--brand" as string]: match.color } : undefined}>
      {match && <match.Icon aria-hidden="true" />}
      <span>{name}</span>
    </li>
  );
}
