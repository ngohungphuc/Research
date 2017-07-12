from student import Student

# inherit from Student class
class HighSchoolStudent(Student):
    school_name = "Nash tech"

    def get_school_name(self):
        return "this is high scholl student"

    def get_name_capitalize(self):
        original_value = super().get_name_capitalize()
        return original_value + " -hs"
