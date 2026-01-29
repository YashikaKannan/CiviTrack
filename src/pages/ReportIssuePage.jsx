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
    <section className="app-container section-pad">
      <SectionHeader
        title="Report a Civic Issue"
        subtitle="Share key details so authorities can respond quickly."
      />
      <form
        onSubmit={handleSubmit}
        className="card mt-8 space-y-6 rounded-3xl p-8 shadow-md"
      >
        <div className="grid gap-6 md:grid-cols-2">
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
              className="input-field"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">
              Category
            </label>
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="select-field"
            >
              {categories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
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
        <button type="submit" className="btn-primary w-full text-base">
          Submit Issue Report
        </button>
      </form>
    </section>
  );
};

export default ReportIssuePage;
