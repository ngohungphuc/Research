using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IdentityServer4.Models;

namespace BankOfDotNet.IdentityServer
{
    public static class Config
    {
        public static IEnumerable<ApiResource> GetAllAPIResources()
        {
            return new List<ApiResource>
            {
                new ApiResource("bankOfDotnetApi", "Customer API for BankOfDotNet")
            };
        }

        public static IEnumerable<Client> GetClients()
        {
            return new List<Client>
            {
                new Client
                {
                    ClientId =  "client",
                    AllowedGrantTypes = GrantTypes.ClientCredentials,
                    ClientSecrets =
                    {
                        new Secret("secret".Sha256())
                    },
                    AllowedScopes = { "bankOfDotnetApi" }
                }
            };
        }
    }
}
