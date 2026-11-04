
import AdminHeader from "./components/AdminHeader";
import AdminSidebar from "./components/AdminSidebar";
import Footer from '../../User/pages/components/Footer'
import { FaBook } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";
import { ResponsiveContainer } from "recharts";
import { Pie, PieChart } from "recharts";

function Dashboard() {
  const data = [
    {
      name: "Wings of Fire",
      count: 500,
    },
    {
      name: "Aadujeevitham",
      count: 200,
    },
    {
      name: "Twilights",
      count: 280,
    },
    {
      name: "The Alchemist",
      count: 300,
    },
  ];

  const data1 = [
    {
      name: "Wings of Fire",
      price: 800,
    },
    {
      name: "Aadujeevitham",
      price: 700,
    },
    {
      name: "Twilights",
      price: 1580,
    },
    {
      name: "The Alchemist",
      price: 1300,
    },
  ];

  return (
    <>
      <AdminHeader />

      {/* DASHBOARD */}
      <div className="bg-[#0b0b0b] text-white">
        <div className="w-full min-h-[70vh] grid sm:grid-cols-1 md:grid-cols-12">

          <div className="col-span-3">
            <AdminSidebar />
          </div>

          <div className="md:col-span-9 p-3 md:p-5">

            {/* DASHBOARD CARDS */}
            <div className="grid gap-4 m-2 md:grid-cols-3">

              <div className="bg-gradient-to-br from-[#30204d] to-[#171222] border border-violet-900/50 text-white p-7 rounded-xl text-base flex flex-col gap-4 hover:border-violet-500 transition duration-300">
                <FaBook className="text-2xl text-violet-400" />
                <h2 className="text-gray-300 text-sm">Total Number of Books</h2>
                <p className="text-3xl font-semibold">100+</p>
              </div>

              <div className="bg-gradient-to-br from-[#153d3b] to-[#101d1c] border border-teal-900/50 text-white p-7 rounded-xl text-base flex flex-col gap-4 hover:border-teal-500 transition duration-300">
                <FaUserCheck className="text-2xl text-teal-400" />
                <h2 className="text-gray-300 text-sm">Total Number of users</h2>
                <p className="text-3xl font-semibold">100+</p>
              </div>

              <div className="bg-gradient-to-br from-[#49331b] to-[#21180e] border border-amber-900/50 text-white p-7 rounded-xl text-base flex flex-col gap-4 hover:border-amber-500 transition duration-300">
                <GrUserWorker className="text-2xl text-amber-400" />
                <h2 className="text-gray-300 text-sm">Total Number of Employees</h2>
                <p className="text-3xl font-semibold">100+</p>
              </div>

            </div>

            {/* CHARTS */}
            <div className="grid md:grid-cols-2 gap-5 mt-6">

              <div className="bg-[#171717] border border-[#303030] rounded-xl p-4 hover:border-violet-500/50 transition duration-300">

                {/* Book purchase ratio -Bar chart */}
                <h2 className="text-sm font-semibold text-gray-300 mb-4">
                  Book Purchase Ratio
                </h2>

                <ResponsiveContainer width={"100%"} height={"300"}>
                  <BarChart
                    responsive
                    data={data}
                    margin={{
                      top: 5,
                      right: 0,
                      left: 0,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid stroke="#333333" />
                    <XAxis dataKey="name" stroke="#999999" />
                    <YAxis width="auto" stroke="#999999" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#171717",
                        border: "1px solid #444444",
                        borderRadius: "8px",
                        color: "#ffffff"
                      }}
                    />
                    <Legend />
                    <Bar
                      dataKey="count"
                      fill="#8B5CF6"
                      radius={[10, 10, 0, 0]}
                    />
                    <RechartsDevtools />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-[#171717] border border-[#303030] rounded-xl p-4 hover:border-teal-500/50 transition duration-300">

                {/* grow chart - Pie Chart */}
                <h2 className="text-sm font-semibold text-gray-300 mb-4">
                  Book Growth Chart
                </h2>

                <ResponsiveContainer width={"100%"} height={"300"}>
                  <PieChart responsive>
                    <Pie
                      data={data}
                      dataKey="count"
                      cx="50%"
                      cy="50%"
                      outerRadius="50%"
                      fill="#8B5CF6"
                      stroke="#171717"
                    />

                    <Pie
                      data={data1}
                      dataKey="price"
                      cx="50%"
                      cy="50%"
                      innerRadius="60%"
                      outerRadius="80%"
                      fill="#14B8A6"
                      stroke="#171717"
                      label
                    />

                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#171717",
                        border: "1px solid #444444",
                        borderRadius: "8px",
                        color: "#ffffff"
                      }}
                    />

                    <RechartsDevtools />
                  </PieChart>
                </ResponsiveContainer>
              </div>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;
