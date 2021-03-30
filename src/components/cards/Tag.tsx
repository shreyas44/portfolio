const tagColors = {
  typescript: {
    bg: "#007acc",
    text: "white",
  },
  postgresql: {
    bg: "#32648C",
    text: "white",
  },
  php: {
    bg: "#7377AD",
    text: "white",
  },
  graphql: {
    bg: "#DC4B93",
    text: "white",
  },
  graphene: {
    bg: "#E5432D",
  },
  react: {
    bg: "#56D4FB",
    text: "#111",
  },
  django: {
    bg: "#4BA574",
  },
  apollo: {
    bg: "#122C4A",
  },
  webpack: {
    bg: "#1F74BA",
  },
  mysql: {
    bg: "#42759C",
  },
  jquery: {
    bg: "#1865A7",
  },
  html: {
    bg: "#DD4B2B",
  },
  css: {
    bg: "#1E73BA",
  },
  pandas: {
    bg: "#171455",
  },
  flask: {
    bg: "#282C33",
  },
  tensorflow: {
    bg: "#DF582C",
  },
  svelte: {
    bg: "#ED462F",
  },
  sapper: {
    bg: "#3B9093",
  },
  vercel: {
    bg: "#000",
  },
  tailwindcss: {
    bg: "#45A8B4",
  },
  rollup: {
    bg: "#ED4630",
  },
  nodejs: {
    bg: "#75B759",
  },
  aws: {
    bg: "#F39831",
  },
  lambda: {
    bg: "#F17B30",
  },
  dynamodb: {
    bg: "#216EB4",
  },
  auth: {
    bg: "#e41d1d",
  },
  relay: {
    bg: "#EA692E",
  },
  pwa: {
    bg: "#5E3EC8",
  },
}

interface Props {
  tag: string
}

const Tag: React.FC<Props> = (props) => {
  return (
    <div
      style={{
        backgroundColor: tagColors[props.tag.toLowerCase()]?.bg,
        color: tagColors[props.tag.toLowerCase()]?.text,
      }}
      className="px-2.5 py-1.5 rounded-md text-sm text-white bg-gray-800"
    >
      {props.tag}
    </div>
  )
}

export default Tag
