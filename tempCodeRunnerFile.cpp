#include <iostream>

using namespace std;

class Student {
protected:
    int value;
}

// ostream& operator<<(ostream& stream, const Student& student) {
//     stream << student.value;
//     return stream;
// }

// int operator+(const Student& student1, const Student& student2) {
//     return student1.value + student2.value;
// }

int main() {
    Student student;
    student.value = 0;

    return 0;
}