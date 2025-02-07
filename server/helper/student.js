async function findStudent(req){

    const students = req.studentData;
    const search = req.query.search?.toLowerCase() || "";
    if (search.length < 3) {
        return []
    }
    return students.filter(student =>
        student.name.toLowerCase().includes(search)
    ).slice(0, 5);
}
module.exports = {
    findStudent
};
