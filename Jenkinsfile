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
            environment {
                ECR_URI = credentials('ecr-uri')
            }
            steps {
                script {
                    withCredentials([string(credentialsId: 'ecr-uri', variable: 'ECR_URI')]) {
                        withEnv(['ECR_URI=$ECR_URI']) {
                            docker.withRegistry("$ECR_URI", 'ecr:us-east-1:aws-credentials') {
                                app.push("${env.BUILD_NUMBER}")
                                app.push("latest")
                            }
                        }
                    }
                }
            }
        }
    }
}

