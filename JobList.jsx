import React, { useState } from "react";
import { Card, CardContent } from "./Card";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { Input } from "./Input";
import { handleImageUpload } from "./helpers";


function JobList() {
    const [jobs, setJobs] = useState([
        { id: 1, title: "Software Developer", company: "TechCorp", description: "Looking for a skilled developer.", link: "https://techcorp.com/jobs/1", expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000 },
        { id: 2, title: "Marketing Specialist", company: "MarketPro", description: "Experienced in digital marketing.", link: "https://marketpro.com/jobs/2", expiresAt: Date.now() + 5 * 24 * 60 * 60 * 1000 },
      ]);
    
      const [newJob, setNewJob] = useState({ title: "", company: "", description: "", link: "" });
  const [newProduct, setNewProduct] = useState({ name: "", description: "", price: "" });

  const addJob = () => {
    setJobs([...jobs, { ...newJob, id: jobs.length + 1, expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000 }]);
    setNewJob({ title: "", company: "", description: "", link: "" });
  };

    return (
        <>
        <h2 className="text-2xl font-semibold mb-4 text-indigo-700">💼 Job Listings</h2>
        <div className="mb-4">
            <Input placeholder="Job Title" value={newJob.title} onChange={(e) => setNewJob({ ...newJob, title: e.target.value })} />
            <Input placeholder="Company" value={newJob.company} onChange={(e) => setNewJob({ ...newJob, company: e.target.value })} />
            <Input placeholder="Description" value={newJob.description} onChange={(e) => setNewJob({ ...newJob, description: e.target.value })} />
            <Input placeholder="Application Link" value={newJob.link} onChange={(e) => setNewJob({ ...newJob, link: e.target.value })} />
            <Button onClick={addJob} className="mt-2 bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700">Add Job</Button>
          </div>
        <div className="grid gap-6" >
          {jobs.map((job) => (
            <motion.div key={job.id} whileHover={{ scale: 1.05 }}>
              <Card className="job-card">
                <CardContent>
                  <h2>{job.title}</h2>
                  <p>{job.company}</p>
                  <p>{job.description}</p>
                  <a href={job.link} target="_blank" rel="noopener noreferrer" className="apply-link">Apply Here</a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </>

    );
    
}

export default JobList