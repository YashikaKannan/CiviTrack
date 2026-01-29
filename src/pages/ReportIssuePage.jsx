import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageUploader from "../components/ImageUploader";
import SectionHeader from "../components/SectionHeader";
import { IssuesContext } from "../context/IssuesContext";

const categories = ["Road", "Garbage", "Drainage", "Streetlight", "Water"];

const ReportIssuePage = () => {
  const navigate = useNavigate();
  const { addIssue } = useContext(IssuesContext);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [image, setImage] = useState("");

  const location = "Auto-detected: Central Ward, Block A";

  const handleSubmit = (event) => {
    event.preventDefault();
    const newIssue = {
      id: `ISSUE-${Math.floor(Math.random() * 900 + 100)}`,
      title: title.trim(),
      category,
      image:
        image ||
        "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?auto=format&fit=crop&w=800&q=80",
      afterImage: "",
      location,
      status: "Reported",
    };
    addIssue(newIssue);
    navigate("/issues");
  };

  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6">
      <SectionHeader
        title="Report a Civic Issue"
        subtitle="Share key details so authorities can respond quickly."
      />
      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
      >
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">
            Issue Title
          </label>
          <input
            type="text"
            required
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="E.g., Broken streetlight near Park Avenue"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">
            Category
          </label>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
          >
            {categories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
        <ImageUploader
          label="Upload Photo"
          value={image}
          onChange={setImage}
        />
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">
            Location
          </label>
          <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
            {location}
          </div>
        </div>
        <button
          type="submit"
          className="w-full rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200"
        >
          Submit Issue Report
        </button>
      </form>
    </section>
  );
};

export default ReportIssuePage;
