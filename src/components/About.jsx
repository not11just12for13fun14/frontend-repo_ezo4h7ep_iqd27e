export default function About() {
  return (
    <section id="about" className="relative bg-slate-900 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">About</h2>
            <p className="mt-6 text-slate-300 leading-relaxed">
              I am a software engineer with strong experience across full-stack development, cloud solutions, DevOps, automation, mobile apps, and IT consulting. I help businesses streamline operations, secure their systems, and build digital products that scale.
            </p>
            
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-white/10 p-5 bg-slate-800/40">
                <h3 className="text-white font-semibold">Skills</h3>
                <ul className="mt-3 text-slate-300 text-sm space-y-2">
                  <li>Full-stack development (React, Node, Python)</li>
                  <li>Cloud (AWS, Azure, GCP)</li>
                  <li>DevOps (CI/CD, Docker, Kubernetes)</li>
                  <li>Databases (MongoDB, PostgreSQL)</li>
                  <li>AI integration & automation</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-white/10 p-5 bg-slate-800/40">
                <h3 className="text-white font-semibold">Tools</h3>
                <ul className="mt-3 text-slate-300 text-sm space-y-2">
                  <li>GitHub, GitLab, Bitbucket</li>
                  <li>Docker, Kubernetes, Terraform</li>
                  <li>Jenkins, GitHub Actions, CircleCI</li>
                  <li>Figma, Postman, Swagger</li>
                  <li>Linux, Nginx, Cloudflare</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 p-6 bg-slate-800/40">
            <h3 className="text-white font-semibold">Approach</h3>
            <p className="mt-3 text-slate-300 text-sm leading-relaxed">
              Modern, efficient, and business-oriented. I focus on clear communication, measurable outcomes, and scalable architectures. Each engagement starts with discovery, followed by a roadmap that prioritizes high-impact milestones. Delivery includes documentation, knowledge transfer, and continuous improvement.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm text-slate-300">
              <div className="rounded-lg bg-slate-900/60 p-4 ring-1 ring-white/10">
                <p className="font-medium text-white">Discovery & Strategy</p>
                <p className="mt-1">Requirements mapping and success metrics</p>
              </div>
              <div className="rounded-lg bg-slate-900/60 p-4 ring-1 ring-white/10">
                <p className="font-medium text-white">Build & Iterate</p>
                <p className="mt-1">Agile delivery with continuous feedback</p>
              </div>
              <div className="rounded-lg bg-slate-900/60 p-4 ring-1 ring-white/10">
                <p className="font-medium text-white">Launch & Scale</p>
                <p className="mt-1">Secure, monitored, and optimized systems</p>
              </div>
              <div className="rounded-lg bg-slate-900/60 p-4 ring-1 ring-white/10">
                <p className="font-medium text-white">Support & Training</p>
                <p className="mt-1">Enable your team to operate confidently</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
