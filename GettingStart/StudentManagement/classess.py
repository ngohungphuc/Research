students = []


class Student:
    school_name = "TDT"

    # pass keyword tell interpreter do nothing
    # self keyword refer to instance of the class
    def __init__(self, name, student_id=322):
        self.name = name
        self.student_id = student_id
        students.append(self)

    def __str__(self):
        return "Student " + self.name

    def get_name_capitialize(self):
        return self.name.capitialize()

    def get_school_name(self):
        return self.school_name


# inherit from Student class
class HighSchollStudent(Student):
    school_name = "Nash tech"

    def get_school_name(self):
        return "this is high scholl student"

    def get_name_capitalize(self):
        original_value = super().get_name_capitialize()
        return original_value + " -hs"
