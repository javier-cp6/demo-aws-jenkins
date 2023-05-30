#!/bin/bash

stack_name="demo-cloudformation"
template_file="cloudformation_template.yaml"
region="us-east-1"

aws cloudformation create-stack \
  --stack-name "$stack_name" \
  --template-body "file://$template_file" \
  --parameters \
    ParameterKey=ApiName,ParameterValue=demo-cloudformation \
    ParameterKey=DemoLambdaName,ParameterValue=demo-cloudformation \
  --region "$region"
