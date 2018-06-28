Install IS4 template

> dotnet new -i identityserver4.templates

> dotnet new is4aspid

> dotnet add package Microsoft.EntityFrameworkCore --version 2.1.0

> dotnet add package Microsoft.EntityFrameworkCore.Design --version 2.1.0

> dotnet add package Npgsql.EntityFrameworkCore.PostgreSql --version 2.1.0

> dotnet add package Npgsql.EntityFrameworkCore.PostgreSql.Design --version 2.0.0-preview1

> dotnet add package IdentityServer4 --version 2.2.0

> dotnet add package IdentityServer4.EntityFramework --version 2.1.1

> dotnet add package IdentityServer4.AspNetIdentity --version 2.1.0

> dotnet ef migrations add InitDB --context ApplicationDbContext -o Data/Migrations/AspNetIdentity/ApplicationDB

> dotnet ef migrations add InitDB_Configuration --context ConfigurationDbContext -o Data/Migrations/IdentityServer/ConfigurationDB

> dotnet ef migrations add InitDB_Persisted_Grant_migration --context PersistedGrantDbContext -o Data/Migrations/IdentityServer/PersistedGrantDB

> dotnet ef database update --context ApplicationDbContext

> dotnet ef database update --context ConfigurationDbContext

> dotnet ef database update --context PersistedGrantDbContext