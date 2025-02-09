from sqlalchemy.orm import mapped_column, Mapped, DeclarativeBase
from sqlalchemy import text
from typing import Optional

class Base(DeclarativeBase):
    pass


class Student(Base):
    __tablename__ = "students"

    id: Mapped[int] = mapped_column(primary_key=True)
    first_name: Mapped[str] = mapped_column(nullable=False)
    last_name: Mapped[str] = mapped_column(nullable=False)
    email: Mapped[str] = mapped_column(unique=True)
    imageUrl: Mapped[Optional[str]] = mapped_column(nullable=False,default="https://d2jyir0m79gs60.cloudfront.net/news/images/successful-college-student-lg.png")
    gpa: Mapped[float]


class Campus(Base):
    __tablename__ = "campuses"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(nullable=False)
    imageUrl: Mapped[Optional[str]] = mapped_column(nullable=False, default="https://www.cuny.edu/wp-content/uploads/sites/4/page-assets/home-preview/colleges/layout/City-College-Photo-Request-2017_48_CarlosParker_HarrisHall.jpg")
    address: Mapped[str] = mapped_column(nullable=False)
    description: Mapped[str]