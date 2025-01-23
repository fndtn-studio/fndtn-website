function SocialLinks() {
  const links = [
    { name: 'instagram', href: "/" },
    { name: 'dribbble', href: "/" },
    { name: 'github', href: "https://github.com/fndtn-studio" },
    { name: 'behance', href: "/" },
    { name: 'twitter / x', href: "/" },
  ]
  
  return (
    <div className="flex w-[1080px] justify-evenly text-center items-center">
      {links.map((link, index) => (
        <a key={index} href={link.href} target="_blank"
          className="pt-[18px] font-work-sans rounded-full w-[200px] h-[64px] align-text-bottom text-center border border-solid border-white transition"
        >
          {link.name}
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
