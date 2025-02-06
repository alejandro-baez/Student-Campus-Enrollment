from sqlalchemy.orm import mapped_column, Mapped, DeclarativeBase


class Base(DeclarativeBase):
    pass


class Student(Base):
    __tablename__ = "students"

    id: Mapped[int] = mapped_column(primary_key=True)
    first_name: Mapped[str] = mapped_column(nullable=False)
    last_name: Mapped[str] = mapped_column(nullable=False)
    # need to have pydantic for email and gpa validation
    email: Mapped[str] = mapped_column(unique=True)
    imageUrl: Mapped[str] = mapped_column(default="https://d2jyir0m79gs60.cloudfront.net/news/images/successful-college-student-lg.png")
    gpa: Mapped[float]


