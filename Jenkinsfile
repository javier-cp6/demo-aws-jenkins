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
                withCredentials([string(credentialsId: 'ecr-uri', variable: 'ECR_REPO_URI')]) {
                    script {
                        withEnv(["ECR_REPO_URI=${ECR_REPO_URI}"]) {
                            docker.withRegistry("$ECR_REPO_URI", 'ecr:us-east-1:aws-credentials') {
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

