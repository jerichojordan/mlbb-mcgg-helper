const Footer = () => {
    const year : string = new Date().getFullYear().toString()
  return (
    <footer>
        <p>Copyright &copy; {year} Jericho Jordan</p>
    </footer>
  )
}

export default Footer