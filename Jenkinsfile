pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
            args '-p 3000:3000' 
        }
    }
	environment {
        CI = 'true'
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
		stage('Test - Functions and DB') {
            steps {
                sh 'npm run test --detectOpenHandles'
            }
        }
        stage('Test - HTTP Rest API') {
            steps {
                sh 'npm run test:http --detectOpenHandles'
            }
        }
    }
}
