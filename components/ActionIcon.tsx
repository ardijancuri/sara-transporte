import {
  IconArrowRight,
  IconArrowUpRight,
  IconDownload,
} from "@tabler/icons-react";

type ActionIconKind = "diagonal" | "forward" | "download";

export function ActionIcon({
  kind = "diagonal",
  plain = false,
}: {
  kind?: ActionIconKind;
  plain?: boolean;
}) {
  const Icon =
    kind === "forward"
      ? IconArrowRight
      : kind === "download"
        ? IconDownload
        : IconArrowUpRight;

  return (
    <span
      className={plain ? "action-icon action-icon-plain" : "action-icon"}
      aria-hidden="true"
    >
      <Icon size={16} stroke={1.8} />
    </span>
  );
}
