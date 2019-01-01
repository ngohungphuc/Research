using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Github.Webhook.Model
{
    public class ErrorViewModel
    {
        public string RequestId { get; set; }

        public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);
    }
}
