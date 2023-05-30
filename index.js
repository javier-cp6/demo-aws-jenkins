exports.handler = async (event, context) => {
    console.log(event);
    console.log(context);
    
    const response = {
      statusCode: 200,
      body: "Hello AWS from Jenkins!"
    };
  
    return response;
  }
  