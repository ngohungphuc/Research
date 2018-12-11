using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using IdentityModel;
using IdentityServer4;
using IdentityServer4.Models;
using IdentityServer4.Test;

namespace IdentityServer4_NetCore2._2.Settings
{
    internal class Clients
    {
        /// <summary>
        /// App can access to IS
        /// </summary>
        /// <returns></returns>
        public static IEnumerable<Client> Get()
        {
            return new List<Client> {
                new Client {
                    ClientId = "openIdConnectClient",
                    ClientName = "Example Implicit Client Application",
                    AllowedGrantTypes = GrantTypes.Implicit,
                    AllowedScopes = new List<string>
                    {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        IdentityServerConstants.StandardScopes.Email,
                        "role",
                        "customAPI.write"
                    },
                    //change to http://docs.identityserver.io/en/latest/topics/clients.html?highlight=AllowedGrantTypes
                    RedirectUris = new List<string> {"https://localhost:44330/signin-oidc"},
                    PostLogoutRedirectUris = new List<string> {"https://localhost:44330"},
                    RequireConsent = false
                }
            };
        }
    }

    internal class Resources
    {
        /// <summary>
        /// Identity resources are data like user ID, name, or email address of a user. 
        /// An identity resource has a unique name, and you can assign arbitrary claim types to it. 
        /// These claims will then be included in the identity token for the user. 
        /// The client will use the scope parameter to request access to an identity resource.
        /// </summary>
        /// <returns></returns>
        public static IEnumerable<IdentityResource> GetIdentityResources()
        {
            return new List<IdentityResource> {
                new IdentityResources.OpenId(),
                new IdentityResources.Profile(),
                new IdentityResources.Email(),
                new IdentityResource {
                    Name = "role",
                    UserClaims = new List<string> {"role"}
                }
            };
        }

        /// <summary>
        /// To allow clients to request access tokens for APIs, you need to define API resources
        /// </summary>
        /// <returns></returns>
        public static IEnumerable<ApiResource> GetApiResources()
        {
            return new List<ApiResource> {
                new ApiResource {
                    Name = "DevSocialAPI",
                    DisplayName = "DevSocial API",
                    Description = "DevSocial API Access",
                    UserClaims = new List<string> {"role"},
                    ApiSecrets = new List<Secret> {new Secret("scopeSecret".Sha256())},
                    Scopes = new List<Scope> {
                        new Scope("customAPI.read"),
                        new Scope("customAPI.write")
                    }
                }
            };
        }
    }

    internal class Users
    {
        public static List<TestUser> Get()
        {
            return new List<TestUser> {
                new TestUser {
                    SubjectId = "5BE86359-073C-434B-AD2D-A3932222DABE",
                    Username = "tony",
                    Password = "123456",
                    Claims = new List<Claim> {
                        new Claim(JwtClaimTypes.Email, "tony@gmail.com"),
                        new Claim(JwtClaimTypes.Role, "admin")
                    }
                }
            };
        }
    }
}
