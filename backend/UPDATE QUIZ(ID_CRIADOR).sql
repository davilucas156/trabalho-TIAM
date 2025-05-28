-- 1. Adiciona a coluna na tabela Quizz
USE mydb;
GO
ALTER TABLE QUIZZES
ADD ID_CRIADOR INT;

-- 2. Cria a chave estrangeira entre Quizz.UsuarioId e Usuario.Id
ALTER TABLE QUIZZES
ADD CONSTRAINT FK_Quizz_Usuario
FOREIGN KEY (ID_CRIADOR) REFERENCES USUARIO(ID_USUARIO);