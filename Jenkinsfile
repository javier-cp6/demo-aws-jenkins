pipeline {
    agent any
    options {
        skipStagesAfterUnstable()
    }
    stages {
         stage('Clone repository') { 
            steps { 
                script{
                checkout scm
                }
            }
        }

        stage('Build') { 
            steps { 
                script{
                 app = docker.build("lambda-docker-hello-world")
                }
            }
        }
        stage('Test'){
            steps {
                 echo 'Empty'
            }
        }

        stage('Deploy') {
            steps {
                script {
                    docker.withRegistry(env.ECR_URI, 'ecr:us-east-1:aws-credentials') {
                        app.push("latest")
                    }
                }
            }
        }
    }
}

