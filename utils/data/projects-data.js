import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'HR Data Drive',
        description: "Me and my team contributed to the development of a web-based corporate tool designed to enhance human resource management through advanced data analytics and reporting. We designed and developed user interfaces with customized access for HR professionals and employees, integrating predictive analytics with machine learning for strategic decision-making. Implemented core functionalities like time tracking, performance evaluations, and employee feedback using AI models and Gmail integration. Supported the deployment of role-based access control and AI-powered workforce analytics to boost HR operational efficiency.",
        tools: ['Express', 'MongoDB', 'Node JS', 'React', 'TensorFlow', 'Google API', 'Figma', 'JWT\''],
        role: 'Full Stack Developer and UI/UX Designer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Sha\'oor Platform',
        description: 'Me and my team designed the UI/UX framework for Sha\'oor, a mobile application aimed at promoting open discussions on sexual education among Pakistani families. Engaged extensively in user research to understand user needs and preferences, which guided the development of culturally-sensitive features enhancing effective communication. Transitioned designs from low-fidelity sketches to high-fidelity prototypes, prioritizing intuitive navigation and accessibility. Conducted comprehensive usability testing to refine the user interface and ensure the platform\'s effectiveness in content delivery.',
        tools: ['Figma\''],
        role: 'UI/UX Designer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 3,
        name: 'Market Mole Game',
        description: 'Designed UI/UX elements for \'Market Mole,\' an interactive stock trading game that focuses on strategic manipulation and insider trading within a 60-minute, round-based structure. Crafted user flows and interfaces to support complex trading decisions and information sharing among players, enhancing engagement through a competitive, fast-paced environment. Employed user-centered design principles to ensure intuitive gameplay interactions, aiding players in executing trades and strategizing based on real-time, secret information.',
        tools: ['Figma\''],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: crefin,
    },
    {
        id: 4,
        name: 'Content Moderation and Toxicity Classification',
        description: "Developed a machine learning model capable of classifying online comments into six categories of toxicity: mild toxicity, severe toxicity, obscenity, threats, insults, and identity hate. Utilized pretrained encoder-transformers like BERT and DeBERTa to derive contextualized text representations. Implemented and compared various classifiers including Naive Bayes, Logistic Regression, and RNNs with embeddings for feature representation. Thoroughly evaluated model performance using metrics such as accuracy, precision, recall, and F1-score, to provide detailed insights into the strengths and limitations of each approach.",
        tools: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'BERT', 'DeBERTa', 'RNN', 'Naive Bayes', 'Logistic Regression\''],
        code: '',
        demo: '',
        image: crefin,
        role: 'Machine Learning Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },