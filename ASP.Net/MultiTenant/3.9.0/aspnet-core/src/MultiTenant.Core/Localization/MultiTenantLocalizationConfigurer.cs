using Abp.Configuration.Startup;
using Abp.Localization.Dictionaries;
using Abp.Localization.Dictionaries.Xml;
using Abp.Reflection.Extensions;

namespace MultiTenant.Localization
{
    public static class MultiTenantLocalizationConfigurer
    {
        public static void Configure(ILocalizationConfiguration localizationConfiguration)
        {
            localizationConfiguration.Sources.Add(
                new DictionaryBasedLocalizationSource(MultiTenantConsts.LocalizationSourceName,
                    new XmlEmbeddedFileLocalizationDictionaryProvider(
                        typeof(MultiTenantLocalizationConfigurer).GetAssembly(),
                        "MultiTenant.Localization.SourceFiles"
                    )
                )
            );
        }
    }
}
