import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { motion } from "framer-motion"

const WhyAttend = () => {
  const [hoveredBenefit, setHoveredBenefit] = useState(null)

  const benefits = [
    {
      id: 1,
      title: "Early applications = Higher scholarship chances!",
      icon: "🎓",
      color: "#FF6B6B",
    },
    {
      id: 2,
      title: "Get your academic documents assessed for eligibility",
      icon: "📋",
      color: "#4ECDC4",
    },
    {
      id: 3,
      title: "Meet representatives from top universities in Australia, UK & USA",
      icon: "🌎",
      color: "#FFD166",
    },
    {
      id: 4,
      title: "Explore career opportunities & course options",
      icon: "🔍",
      color: "#06D6A0",
    },
    {
      id: 5,
      title: "Save on application fees",
      icon: "💰",
      color: "#118AB2",
    },
    {
      id: 6,
      title: "Leadership Scholarship – 100% tuition fees!",
      icon: "🏆",
      color: "#073B4C",
    },
    {
      id: 7,
      title: "Merit Scholarship – A$10,000 per year!",
      icon: "🌟",
      color: "#7209B7",
    },
    {
      id: 8,
      title: "Study Grant – A$10,000 one-time!",
      icon: "🎉",
      color: "#F72585",
    },
  ]

  return (
    <section className="enhanced-why-attend-section py-5">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

          .enhanced-why-attend-section {
            font-family: 'Poppins', sans-serif;
            background-color: #fff;
            padding: 80px 0;
            padding-top: 0!important;
            overflow-x: hidden;
          }

          .section-title {
            font-size: 3rem;
            font-weight: 700;
            color: #2D3748;
            margin-bottom: 15px;
            letter-spacing: -0.5px;
          }

          .section-divider {
            height: 6px;
            width: 100px;
            background: linear-gradient(90deg, #4ECDC4, #FF6B6B);
            margin: 0 auto 30px;
            border-radius: 3px;
          }

          .section-subtitle {
            font-size: 1.3rem;
            color: #4A5568;
            margin-bottom: 50px;
            font-weight: 300;
          }

          .benefit-card {
            background-color: white;
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            padding: 30px;
            transition: all 0.3s ease;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            cursor: pointer;
          }

          .benefit-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
          }

          .benefit-icon {
            font-size: 4rem;
            // margin-bottom: 20px;
          }

          .benefit-title {
            font-size: 1.1rem;
            font-weight: 600;
            color: #2D3748;
            margin-top: 10px;
          }

          .register-btn {
            padding: 15px 40px;
            font-weight: 600;
            font-size: 1.1rem;
            border-radius: 50px;
            background: #152A68;
            border: none;
            // box-shadow: 0 10px 20px rgba(17, 138, 178, 0.3);
            transition: all 0.3s ease;
          }

          .register-btn:hover {
            transform: translateY(-3px);
            // box-shadow: 0 15px 30px rgba(17, 138, 178, 0.4);
            background: #152A68;
          }

          .limited-seats {
            color: #4A5568;
            font-size: 1rem;
            font-weight: 500;
            margin-top: 20px;
          }

          .benefit-card .hover-info {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 10px;
            border-bottom-left-radius: 16px;
            border-bottom-right-radius: 16px;
            opacity: 0;
            transition: all 0.3s ease;
          }

          .benefit-card:hover .hover-info {
            opacity: 1;
          }

          @media (max-width: 768px) {
            .section-title {
              font-size: 2.5rem;
            }
            
            .benefit-title {
              font-size: 1rem;
            }

            .register-btn {
              padding: 12px 30px;
              font-size: 1rem;
            }
          }
        `}
      </style>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="row justify-content-center mb-5"
        >
          <div className="col-lg-8 text-center">
            <h2 className="section-title">Why Attend?</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Unlock a world of opportunities at our premier education fair</p>
          </div>
        </motion.div>

        <div className="row">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              className="col-sm-6 col-lg-3 mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className="benefit-card"
                style={{ borderTop: `4px solid ${benefit.color}` }}
                onMouseEnter={() => setHoveredBenefit(benefit.id)}
                onMouseLeave={() => setHoveredBenefit(null)}
              >
                <div className="benefit-icon" style={{ color: benefit.color }}>
                  {benefit.icon}
                </div>
                <h3 className="benefit-title">{benefit.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyAttend

