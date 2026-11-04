
import { GrResources } from "react-icons/gr"
import { IoSettings } from "react-icons/io5"
import { MdDashboard } from "react-icons/md"
import { Link } from "react-router-dom"

function AdminSidebar() {
  return (
    <>
      <div className="bg-black min-h-screen flex rounded-2xl mt-3 ms-2 mb-3 text-white border border-[#292929]">
        <div className="flex flex-col items-center gap-3 mt-20 w-full px-4">

          <img
            src="https://png.pngtree.com/png-vector/20241115/ourmid/pngtree-user-icon-web-admin-profile-avatar-silver-color-style-vector-png-image_14430725.png"
            width={"65%"}
            className="rounded-full border-2 border-[#383838]"
          />

          <h1 className="text-xl font-semibold text-white">
            Admin Dashboard
          </h1>

          <div className="flex flex-col items-start gap-4 my-5 w-full">

            <Link to={'/admin'} className="w-full">
              <label
                htmlFor="op"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-[#252525] hover:text-white transition duration-200 cursor-pointer"
              >
                <input
                  type="radio"
                  checked={location.pathname=='/admin'}
                  name="option"
                  id="op"
                  readOnly
                  className="accent-white"
                />
                <MdDashboard />
                Dashboard
              </label>
            </Link>

            <Link to={'/admin/resources'} className="w-full">
              <label
                htmlFor="op"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-[#252525] hover:text-white transition duration-200 cursor-pointer"
              >
                <input
                  type="radio"
                  checked={location.pathname=='/admin/resources'}
                  name="option"
                  id="op"
                  readOnly
                  className="accent-white"
                />
                <GrResources />
                Resources
              </label>
            </Link>

            <Link to={'/admin/settings'} className="w-full">
              <label
                htmlFor="op"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-[#252525] hover:text-white transition duration-200 cursor-pointer"
              >
                <input
                  type="radio"
                  checked={location.pathname=='/admin/settings'}
                  name="option"
                  id="op"
                  readOnly
                  className="accent-white"
                />
                <IoSettings />
                Settings
              </label>
            </Link>

          </div>
        </div>
      </div>
    </>
  )
}

export default AdminSidebar
