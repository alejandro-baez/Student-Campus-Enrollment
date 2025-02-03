from database import Base, engine,session
from sqlalchemy.orm import mapped_column, Mapped



class User(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] 

Base.metadata.create_all(engine)

user1 = User(name='Alex')

session.add(user1)

session.commit()



