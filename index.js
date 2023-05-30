exports.handler = async (event, context) => {
    console.log(event);
    console.log(context);
    
    const response = {
      statusCode: 200,
      body: "Hello AWS, Github, and Jenkins!"
    };
  
    return response;
  }
  