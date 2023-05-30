exports.handler = async (event, context) => {
    console.log(event);
    console.log(context);
    
    const response = {
      statusCode: 200,
      body: "DevOps: CI/CD pipeline with AWS, Jenkins, Docker, and GitHub"
    };
  
    return response;
  }
  