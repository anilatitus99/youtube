const {CloudBuildClient} = require('@google-cloud/cloudbuild');
const client = new CloudBuildClient();

exports.triggerCloudBuild = async (req, res) => {
  const projectId = 'project-456212'; // Replace with your project ID
  const buildTriggerId = 'your-cloud-build-trigger-id'; // Replace with the Cloud Build trigger ID you will generate later

  const [response] = await client.createBuild({
    projectId,
    build: {
      triggerId: buildTriggerId,
      source: {
        repoSource: {
          projectId,
          repoName: 'your-repo-name',
          branchName: 'main',
        },
      },
    },
  });

  res.status(200).send(`Build triggered: ${response.name}`);
};
