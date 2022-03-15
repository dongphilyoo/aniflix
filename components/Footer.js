const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <a
      href="https://www.dongphilyoo.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="text-center my-5 text-gray-300">
        <span>© {year} Aniflix (๑*ᗜ*) </span>
        <span>Enjoy your anime life!</span>
      </div>
    </a>
  )
}

export default Footer
