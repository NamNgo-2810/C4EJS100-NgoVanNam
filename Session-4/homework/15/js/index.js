// 15.1
//console.log(jobData);

// 15.2
//console.log(jobData.hits[0]);

// 15.3
// console.log('First job title:');
// console.log(jobData.hits[0].jobTitle);

// 15.4
// console.log('Job hits:');
// console.log(jobData.hits[0].benefits);

// 15.5
// console.log('First job hit benefit:');
// for (let benefit of  jobData.hits[0].benefits) {
//     console.log(`- ${benefit.benefitValue}`);
// }

//15.6
// for (let hit of jobData.hits) {
//     console.log(hit.jobTitle);
//     console.log('Benefits:');
//     for (let benefit of hit.benefits) {
//         console.log(`- ${benefit.benefitValue}`);
//     }
//     console.log('-------------------------------------------');
// }

//15.7
for (let hit of jobData.hits) {
    console.log(hit.jobTitle);
    console.log(`Salary: ${hit.jobSalary}$`);
    for (let location of hit.locations) {
        console.log(`- ${location}`);
    }
    console.log('Benefits:');
    for (let benefit of hit.benefits) {
        console.log(`- ${benefit.benefitValue}`);
    }
    console.log('Skills:');
    for (let skill of hit.skills) {
        console.log(`- ${skill}`);
    }
    console.log('-------------------------------------------');
}