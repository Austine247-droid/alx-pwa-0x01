// Update the import path below to the correct relative path if needed
import { ComponentProps } from '../../interfaces'
import Header from './Header'
import Footer from './Footer'

const Layout: React.FC<ComponentProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
