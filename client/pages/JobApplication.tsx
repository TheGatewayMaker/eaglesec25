import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { X, Upload } from "lucide-react";
import {
  AnimatedFadeInDown,
  AnimatedFadeInLeft,
  AnimatedFadeInUp,
  AnimatedFadeInRight,
} from "@/components/AnimationWrappers";

const jobListings = [
  {
    id: 1,
    title: "Senior Security Officer",
    department: "Field Operations",
    city: "Islamabad",
    openingDate: "December 10, 2024",
    deadline: "January 15, 2025",
  },
  {
    id: 2,
    title: "Tactical Bodyguard Specialist",
    department: "VIP Protection",
    city: "Lahore",
    openingDate: "December 12, 2024",
    deadline: "January 20, 2025",
  },
  {
    id: 3,
    title: "Security Supervisor",
    department: "Team Management",
    city: "Karachi",
    openingDate: "December 15, 2024",
    deadline: "January 25, 2025",
  },
  {
    id: 4,
    title: "Mobile Escort Coordinator",
    department: "Mobile Security",
    city: "Multan",
    openingDate: "December 8, 2024",
    deadline: "January 10, 2025",
  },
  {
    id: 5,
    title: "Static Security Guard",
    department: "Facility Security",
    city: "Peshawar",
    openingDate: "December 18, 2024",
    deadline: "January 28, 2025",
  },
  {
    id: 6,
    title: "Training & Development Officer",
    department: "HR & Training",
    city: "Islamabad",
    openingDate: "December 14, 2024",
    deadline: "January 22, 2025",
  },
  {
    id: 7,
    title: "Surveillance Systems Operator",
    department: "Technology & Monitoring",
    city: "Lahore",
    openingDate: "December 16, 2024",
    deadline: "January 30, 2025",
  },
  {
    id: 8,
    title: "HR Manager",
    department: "Human Resources",
    city: "Islamabad",
    openingDate: "December 20, 2024",
    deadline: "February 5, 2025",
  },
];

interface FormData {
  name: string;
  fatherName: string;
  currentAddress: string;
  permanentAddress: string;
  cnicNumber: string;
  phoneNumber: string;
  education: string;
  previousExperience: string;
  city: string;
}

interface FileError {
  message: string;
}

export default function JobApplication() {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const jobIdNum = parseInt(jobId || "0");
  const job = jobListings.find((j) => j.id === jobIdNum);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    fatherName: "",
    currentAddress: "",
    permanentAddress: "",
    cnicNumber: "",
    phoneNumber: "",
    education: "",
    previousExperience: "",
    city: "",
  });

  const [cvFile, setCvFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<FileError | null>(null);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-black mb-4">Job Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The job you're looking for doesn't exist.
          </p>
          <a
            href="/jobs"
            className="bg-accent text-accent-foreground px-8 py-3 font-black text-sm hover:shadow-lg transition-all duration-300 inline-block"
          >
            Back to Jobs
          </a>
        </div>
      </div>
    );
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileError(null);

    if (!file) return;

    const maxSize = 20 * 1024 * 1024;
    const allowedTypes = ["application/pdf", "image/jpeg", "image/png", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

    if (!allowedTypes.includes(file.type)) {
      setFileError({
        message:
          "Invalid file type. Please upload PDF, IMAGE (JPG/PNG), or DOCX.",
      });
      return;
    }

    if (file.size > maxSize) {
      setFileError({
        message: "File size exceeds 20MB limit.",
      });
      return;
    }

    setCvFile(file);
  };

  const handleRemoveFile = () => {
    setCvFile(null);
    setFileError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!cvFile) {
      setFileError({ message: "Please attach your CV before submitting." });
      return;
    }

    if (
      !formData.name ||
      !formData.fatherName ||
      !formData.currentAddress ||
      !formData.permanentAddress ||
      !formData.cnicNumber ||
      !formData.phoneNumber ||
      !formData.education ||
      !formData.city
    ) {
      setFileError({ message: "Please fill in all required fields." });
      return;
    }

    setSubmitLoading(true);

    setTimeout(() => {
      setSubmitLoading(false);
      setSubmitSuccess(true);

      setTimeout(() => {
        navigate("/jobs");
      }, 2000);
    }, 1500);
  };

  return (
    <div
      className="text-foreground"
      style={{
        background:
          "linear-gradient(to bottom, #f9f9f9 0%, #f3f3f3 40%, #efefef 100%)",
      }}
    >
      {/* Header Section */}
      <section className="bg-gradient-to-b from-background via-background to-background/95 text-foreground relative overflow-hidden py-10 sm:py-14 md:py-20 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <AnimatedFadeInDown delay={0} duration="normal">
            <a
              href="/jobs"
              className="inline-block text-accent font-black text-sm mb-4 hover:text-accent-foreground transition-colors duration-300"
            >
              ← Back to Jobs
            </a>
          </AnimatedFadeInDown>
          <AnimatedFadeInDown delay={100} duration="normal">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-2 leading-tight text-foreground">
              Job Application
            </h1>
          </AnimatedFadeInDown>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 sm:py-14 md:py-20 bg-gradient-to-b from-background via-background to-background/95 transition-colors duration-300 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {/* Left Column - Job Details */}
            <AnimatedFadeInLeft threshold={0.2} className="lg:col-span-1">
              <div className="bg-card border-2 border-border p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-black mb-6 text-foreground">
                  Job Details
                </h2>

                {/* Job Title */}
                <div className="mb-6 pb-6 border-b border-border/50">
                  <p className="text-xs font-black text-accent uppercase tracking-widest mb-2">
                    Job Title
                  </p>
                  <p className="text-base sm:text-lg font-black text-foreground">
                    {job.title}
                  </p>
                </div>

                {/* Department */}
                <div className="mb-6 pb-6 border-b border-border/50">
                  <p className="text-xs font-black text-accent uppercase tracking-widest mb-2">
                    Department / Office
                  </p>
                  <p className="text-sm sm:text-base font-bold text-muted-foreground">
                    {job.department}
                  </p>
                </div>

                {/* City */}
                <div className="mb-6 pb-6 border-b border-border/50">
                  <p className="text-xs font-black text-accent uppercase tracking-widest mb-2">
                    City
                  </p>
                  <p className="text-sm sm:text-base font-bold text-muted-foreground">
                    {job.city}
                  </p>
                </div>

                {/* Opening Date */}
                <div className="mb-6 pb-6 border-b border-border/50">
                  <p className="text-xs font-black text-accent uppercase tracking-widest mb-2">
                    Opening Date
                  </p>
                  <p className="text-sm sm:text-base font-bold text-muted-foreground">
                    {job.openingDate}
                  </p>
                </div>

                {/* Deadline */}
                <div>
                  <p className="text-xs font-black text-accent uppercase tracking-widest mb-2">
                    Application Deadline
                  </p>
                  <p className="text-sm sm:text-base font-bold text-muted-foreground">
                    {job.deadline}
                  </p>
                </div>
              </div>
            </AnimatedFadeInLeft>

            {/* Right Column - Application Form */}
            <AnimatedFadeInRight threshold={0.2} className="lg:col-span-2">
              <div className="bg-card border-2 border-border p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-black mb-2 text-foreground">
                  Job Applicant Form
                </h2>
                <p className="text-xs sm:text-sm font-bold text-muted-foreground mb-8">
                  Fill in all required fields below
                </p>

                {submitSuccess && (
                  <div className="mb-8 bg-pk-green-main/10 border-2 border-pk-green-main p-4 sm:p-6">
                    <p className="font-black text-pk-green-main text-center">
                      Application submitted successfully! Redirecting...
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-black text-accent uppercase tracking-widest mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full bg-background border-2 border-border text-foreground px-3 sm:px-4 py-2.5 sm:py-3 font-bold placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors duration-300 text-sm sm:text-base"
                      required
                    />
                  </div>

                  {/* Father Name */}
                  <div>
                    <label className="block text-xs font-black text-accent uppercase tracking-widest mb-2">
                      Father's Name *
                    </label>
                    <input
                      type="text"
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={handleInputChange}
                      placeholder="Enter your father's name"
                      className="w-full bg-background border-2 border-border text-foreground px-4 py-3 font-bold placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors duration-300"
                      required
                    />
                  </div>

                  {/* CNIC Number */}
                  <div>
                    <label className="block text-xs font-black text-accent uppercase tracking-widest mb-2">
                      CNIC Number *
                    </label>
                    <input
                      type="text"
                      name="cnicNumber"
                      value={formData.cnicNumber}
                      onChange={handleInputChange}
                      placeholder="e.g., 12345-6789012-3"
                      className="w-full bg-background border-2 border-border text-foreground px-4 py-3 font-bold placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors duration-300"
                      required
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-black text-accent uppercase tracking-widest mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="e.g., +92 300 1234567"
                      className="w-full bg-background border-2 border-border text-foreground px-4 py-3 font-bold placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors duration-300"
                      required
                    />
                  </div>

                  {/* Current Address */}
                  <div>
                    <label className="block text-xs font-black text-accent uppercase tracking-widest mb-2">
                      Current Address *
                    </label>
                    <textarea
                      name="currentAddress"
                      value={formData.currentAddress}
                      onChange={handleInputChange}
                      placeholder="Enter your current address"
                      rows={3}
                      className="w-full bg-background border-2 border-border text-foreground px-4 py-3 font-bold placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors duration-300 resize-none"
                      required
                    />
                  </div>

                  {/* Permanent Address */}
                  <div>
                    <label className="block text-xs font-black text-accent uppercase tracking-widest mb-2">
                      Permanent Address *
                    </label>
                    <textarea
                      name="permanentAddress"
                      value={formData.permanentAddress}
                      onChange={handleInputChange}
                      placeholder="Enter your permanent address"
                      rows={3}
                      className="w-full bg-background border-2 border-border text-foreground px-4 py-3 font-bold placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors duration-300 resize-none"
                      required
                    />
                  </div>

                  {/* Education */}
                  <div>
                    <label className="block text-xs font-black text-accent uppercase tracking-widest mb-2">
                      Education Level *
                    </label>
                    <select
                      name="education"
                      value={formData.education}
                      onChange={handleInputChange}
                      className="w-full bg-background border-2 border-border text-foreground px-4 py-3 font-bold focus:outline-none focus:border-accent transition-colors duration-300"
                      required
                    >
                      <option value="">Select Education Level</option>
                      <option value="Matric">Matric</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Bachelor">Bachelor's Degree</option>
                      <option value="Master">Master's Degree</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-xs font-black text-accent uppercase tracking-widest mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Enter your city"
                      className="w-full bg-background border-2 border-border text-foreground px-4 py-3 font-bold placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors duration-300"
                      required
                    />
                  </div>

                  {/* Previous Experience */}
                  <div>
                    <label className="block text-xs font-black text-accent uppercase tracking-widest mb-2">
                      Previous Experience
                    </label>
                    <textarea
                      name="previousExperience"
                      value={formData.previousExperience}
                      onChange={handleInputChange}
                      placeholder="Describe your previous work experience (optional)"
                      rows={4}
                      className="w-full bg-background border-2 border-border text-foreground px-4 py-3 font-bold placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors duration-300 resize-none"
                    />
                  </div>

                  {/* File Upload */}
                  <div>
                    <label className="block text-xs font-black text-accent uppercase tracking-widest mb-2">
                      Attach Your CV * (PDF, Image, or DOCX - Max 20MB)
                    </label>
                    {!cvFile ? (
                      <div className="border-2 border-dashed border-border bg-background p-6 sm:p-8 text-center">
                        <Upload className="w-8 h-8 mx-auto text-muted-foreground mb-3" />
                        <p className="text-sm font-bold text-muted-foreground mb-4">
                          Drag and drop your CV or click to select
                        </p>
                        <input
                          type="file"
                          onChange={handleFileChange}
                          accept=".pdf,.png,.jpg,.jpeg,.doc,.docx"
                          className="hidden"
                          id="cv-input"
                        />
                        <label
                          htmlFor="cv-input"
                          className="inline-block bg-accent text-accent-foreground px-6 py-2.5 font-black text-xs cursor-pointer hover:shadow-lg transition-all duration-300"
                        >
                          Choose File
                        </label>
                      </div>
                    ) : (
                      <div className="border-2 border-pk-green-main bg-pk-green-main/5 p-4 flex items-center justify-between">
                        <div className="flex-1">
                          <p className="font-black text-sm text-foreground mb-1">
                            {cvFile.name}
                          </p>
                          <p className="text-xs font-bold text-muted-foreground">
                            {(cvFile.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={handleRemoveFile}
                          className="ml-4 p-2 hover:bg-pk-green-main/20 transition-colors duration-300"
                        >
                          <X className="w-5 h-5 text-pk-green-main" />
                        </button>
                      </div>
                    )}
                    {fileError && (
                      <p className="text-xs font-bold text-red-600 mt-2">
                        {fileError.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitLoading || submitSuccess}
                    className="w-full bg-pk-green-main text-white px-6 py-3 sm:py-4 font-black text-sm sm:text-base hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    {submitLoading ? "Submitting..." : "Submit Application"}
                  </button>
                </form>
              </div>
            </AnimatedFadeInRight>
          </div>
        </div>
      </section>
    </div>
  );
}
