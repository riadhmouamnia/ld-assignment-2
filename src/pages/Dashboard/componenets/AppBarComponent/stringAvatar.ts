export default function stringAvatar(name: string) {
  return {
    sx: {},
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}
