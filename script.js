// Recruiter Portal Tab Switching
function showResumes(role) {
    const roles = ['finance', 'marketing', 'operations'];
    roles.forEach(r => {
        document.getElementById(r).style.display = (r === role) ? 'block' : 'none';
    });
}
