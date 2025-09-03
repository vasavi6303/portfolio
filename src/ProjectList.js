export const projects = [
  {
    id: 1,
    title: "ASK_RC, RAG Chatbot",
    shortDesc: "Developed a RAG-based chatbot with an MLOps pipeline to improve awareness and accessibility of Northeastern University’s Research Computing resources through interactive, factually accurate responses.",
    description: "The RAG-based chatbot enhances awareness and accessibility of Northeastern University’s Research Computing resources by providing accurate, traceable responses using retrieval-augmented generation. It features a robust MLOps pipeline, including data ingestion, preprocessing, model training, and serverless deployment. The data pipeline scrapes, processes, and indexes website content using Azure services for efficient retrieval.\
    With a structured GitHub repository, automated workflows via Airflow, DVC for versioning, and Azure Blob Storage, the system ensures seamless management. Unit testing with pytest and CI/CD through GitHub Actions enhance reliability. Anomaly detection and alerts reduce incident overload, enabling self-service solutions and improving resource discovery for researchers.",
    details: ["Programming Language: Python", "Tools Used: Airflow, DVC, AzureDevOps, GitHub Actions, Docker"],
    image: "img/ragchatbot.jpg",
  },
  {
    id: 2,
    title: "Retail Sales and Trends Dashboard",
    shortDesc: "Leveraged interactive Tableau dashboards to decode retail sales and promotions, unveiling powerful insights on promotion ROI, investment efficiency, and incremental profit growth.",
    description:"This project focused on analyzing retail sales and promotions using Tableau, creating five worksheets and two dashboards to visualize trends and relationships among key business variables. The analysis explored promotion ROI, investment impact, incremental profit, and unit sales volume, helping to assess how promotional strategies influence business performance. Key insights revealed that ROI tends to decrease with increased investment, while optimized promotion prices and higher unit uplifts contribute positively to profitability. Additionally, comparisons across brands, product categories, and sales channels provided a deeper understanding of promotional effectiveness, highlighting Sub-Channel D as a low-ROI segment.\
    Further analysis uncovered a non-linear correlation between unit volume and value sales, emphasizing that increased sales volume does not always proportionally boost revenue due to external factors like market demand, pricing strategies, and promotion effectiveness. The findings also showed that incremental profit gains were positively influenced by unit volume growth and value sales expansion. These insights allow businesses to refine promotional strategies, optimize investment decisions, and improve overall sales performance by focusing on the most effective promotional drivers.",
    details: ["Tools Used: Tableau, Python"],
    link: "https://public.tableau.com/app/profile/vasavi.sai.nunna/viz/shared/KGTX35DPY",
    image: "img/retailsales.jpg",
  },
  {
    id: 3,
    title: "Olympic Data Analysis",
    shortDesc: "Analyzed over a century of Olympic history, revealing trends in athlete participation, gender disparities, seasonal variations, and country-wise performance through data visualization and storytelling.",
    description: "Olympic Chronicles, explores over a century of Olympic history using data visualization and storytelling techniques. By analyzing datasets from Kaggle, we examined trends in athlete participation, gender representation, and seasonal variations in Olympic events. The study highlights how the Olympics evolved from a single-season event to both Summer and Winter Games, with participation growing significantly over time. Notably, the U.S., Great Britain, and France dominate the Summer Olympics in terms of medals, while the U.S., Italy, and Canada lead in the Winter Games. Gender analysis shows a steady increase in female participation, though disparities still exist in male-dominated sports such as wrestling and boxing.\
    Additionally, we explored country-wise performance, athlete growth, and the impact of new sports on participation rates. Findings suggest a strong correlation between the introduction of new sports, gender inclusion, and the rising number of athletes competing in the Games. The research underscores the ongoing shift toward gender equality, with mixed-gender events playing a crucial role. Through this analysis, we provide a data-driven narrative of how the Olympics have shaped global sports, highlighting the intersection of competition, diversity, and athletic excellence. ",
    details: ["Programming Language - Python ", " Libraries used - Tensorflow, Keras, Pandas, Numpy, Flask Web Framework"],
    link: "https://sites.google.com/view/ie6600project1-group1/home",
    image: "img/OlympicData.jpg",
  },
];
